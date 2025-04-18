import styled from 'styled-components/native'

interface TextProps {
  weight?: '400' | '600' | '700'
  color?: string
  size?: number
  opacity?: number
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }: { weight: string }) => weight ? `Outfit-${weight}` : 'Outfit-500'};
  color: ${({ color }: { color: string }) => color || '#333'};
  font-size: ${({ size }: { size: string }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }: { opacity: number }) => opacity || 1};
`
