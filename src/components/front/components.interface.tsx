interface ImageObject {
  mobile: string;
  desktop: string;
}

export interface CarouselSlideProps {
  title: string;
  subtitle: string;
  location: string;
  choice: string;
  description: string;
  images: ImageObject;
}

export interface Slide {
  title: string;
  subtitle: string;
  location: string;
  choice: string;
  description: string;
  images: ImageObject;
}

export interface CarouselProps {
  slides: Slide[];
  interval: number;
}

export interface CarouselIndicatorProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}
