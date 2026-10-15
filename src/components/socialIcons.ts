import type { SocialName } from '../data/site'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  type IconProps,
} from './Icons'

export const SOCIAL_ICONS: Record<SocialName, (props: IconProps) => React.ReactElement> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
}
