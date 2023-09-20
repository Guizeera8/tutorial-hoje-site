export interface Publi {
    type: "image" | "video",
    name: string;
    avaliations: number;
    logo: string;
    image?: string | null;
    video?: string | null;
}