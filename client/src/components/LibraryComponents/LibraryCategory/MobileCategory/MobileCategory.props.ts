export interface MobileCategoryProps {
    mobileCategoryOpen: boolean,
    mobileCategoryToggle: () => void;
    onSelectCategory?: (category: {name: string, id: number}) => void;
}