import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as AvatarContainer from '@radix-ui/react-avatar'
import {
  avatarContainer,
  avatarImage,
  avatarFallback,
  AvatarVariants,
} from './styles.css'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof AvatarContainer.AvatarImage> &
  AvatarVariants & {
    delayMs: number
    fallback?: string
  }

export const Avatar = forwardRef<ElementRef<'img'>, AvatarProps>(
  ({ size, delayMs, fallback, ...props }: AvatarProps, ref) => {
    const variantAvatarContainer = avatarContainer({
      size,
    })

    const variantAvatarFallback = avatarFallback({
      size,
    })

    return (
      <AvatarContainer.Root className={variantAvatarContainer}>
        <AvatarContainer.Image className={avatarImage} {...props} ref={ref} />

        <AvatarContainer.Fallback
          className={variantAvatarFallback}
          delayMs={delayMs}
        >
          {fallback ? fallback.toUpperCase() : <User />}
        </AvatarContainer.Fallback>
      </AvatarContainer.Root>
    )
  },
)

Avatar.displayName = 'Avatar'
