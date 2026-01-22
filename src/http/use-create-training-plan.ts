import { useMutation } from '@tanstack/react-query'

interface TrainingPlanRequest {
  name: string
  age: number
  gender: 'masculine' | 'feminine' | 'other'
  height: number
  weight: number
  trainingGoal: 'muscle_gain' | 'fat_loss' | 'maintenance'
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
  trainingFrequency: '3x_week' | '4x_week' | '5x_week'
  availableEquipment: 'none' | 'basic' | 'full_gym'
}

interface CreateTrainingPlanParams {
  data: TrainingPlanRequest
  onChunk?: (chunk: string) => void
}

export function useCreateTrainingPlan() {
  return useMutation({
    mutationFn: async ({ data, onChunk }: CreateTrainingPlanParams) => {
      const response = await fetch('https://gerador-de-planos-fitness-api.vercel.app/training-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Erro ao criar plano de treino')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ''

      if (!reader) {
        throw new Error('Stream não disponível')
      }

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        fullResponse += chunk
        
        if (onChunk) {
          onChunk(chunk)
        }
      }

      return fullResponse
    }
  })
}