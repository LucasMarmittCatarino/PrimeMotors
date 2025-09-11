import AstonmartinIcon from '~/assets/BrandsLogos/astonmartinIcon.png';
import AudiIcon from '~/assets/BrandsLogos/audiIcon.png';
import BentleyIcon from '~/assets/BrandsLogos/bentleyIcon.png';
import BmwIcon from '~/assets/BrandsLogos/bmwIcon.png';
import FerrariIcon from '~/assets/BrandsLogos/ferrariIcon.png';
import LamboIcon from '~/assets/BrandsLogos/lamboIcon.png';
import MercedesIcon from '~/assets/BrandsLogos/mercedesIcon.png';
import PorscheIcon from '~/assets/BrandsLogos/porscheIcon.png';
import VolvoIcon from '~/assets/BrandsLogos/volvoIcon.png';

export const PartnerIcons = {
  astonMartin: AstonmartinIcon,
  audi: AudiIcon,
  bentley: BentleyIcon,
  bmw: BmwIcon,
  ferrari: FerrariIcon,
  lambo: LamboIcon,
  mercedes: MercedesIcon,
  porsche: PorscheIcon,
  volvo: VolvoIcon,
} as const;

export type PartnerIconName = keyof typeof PartnerIcons;