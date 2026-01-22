import { useMutation } from '@tanstack/react-query'

interface DietPlanRequest {
  name: string
  age: number
  height: number
  weight: number
  activityLevel: 'sedentary' | '2/3x_week' | '4x_week_or_+'
  gender: 'masculine' | 'feminine'
  objective: 'lose_weight' | 'maintain_weight' | 'gain_weight'
}

interface CreateDietPlanParams {
  data: DietPlanRequest
  onChunk?: (chunk: string) => void
}

export function useCreateDietPlan() {
  return useMutation({
    mutationFn: async ({ data, onChunk }: CreateDietPlanParams) => {
      const response = await fetch('https://gerador-de-planos-fitness-api.vercel.app/diet-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Erro ao criar plano de dieta')
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
