export interface MobileCategoryProps {
    mobileCategoryOpen: boolean,
    mobileCategoryToggle: () => void;
    onSelectCategory?: (category: string) => void;
}