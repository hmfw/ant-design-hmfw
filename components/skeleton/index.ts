import {
  Skeleton as InternalSkeleton,
  SkeletonButton,
  SkeletonInput,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonNode,
} from './Skeleton'

type SkeletonType = typeof InternalSkeleton & {
  Button: typeof SkeletonButton
  Input: typeof SkeletonInput
  Avatar: typeof SkeletonAvatar
  Image: typeof SkeletonImage
  Node: typeof SkeletonNode
}

const Skeleton = InternalSkeleton as SkeletonType
Skeleton.Button = SkeletonButton
Skeleton.Input = SkeletonInput
Skeleton.Avatar = SkeletonAvatar
Skeleton.Image = SkeletonImage
Skeleton.Node = SkeletonNode

export { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage, SkeletonNode }
export type { SkeletonAvatarProps, SkeletonTitleProps, SkeletonParagraphProps } from './Skeleton'
