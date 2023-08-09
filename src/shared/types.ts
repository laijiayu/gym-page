export enum SelectedPage {
    Home = "home",
    Benefits = "Benefits",
    OurClass = "Our Class",
    ContactUs = "Contact Us"
}

export interface BenefitType {
    icon: JSX.Element,
    title: string,
    description: string
}

export interface ClassesType {
    name: string,
    description?: string,
    image: string
}