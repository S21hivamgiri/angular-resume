export interface Accordion {
    accordionId: string;
    listCards: Listcard[];
}

export interface Listcard {
    collapseId: string;
    headerId: string;
    header: string;
    content: string;
    progressCard?: progressCard;
}

export interface expansionCard {
    launchImage?: image;
    collapseId: string;
    link?: hrefLink;
    expansionButton: button;
    cardText?: string;
    cardImage?: image;
    accordion?: Accordion;
}

export interface image {
    imageUrl: string;
    altText?: string;
    height?: string;
}

export interface button {
    buttoneUrl?: string;
    buttonImage?: image;
    buttonText?: string;
}

export interface hrefLink {
    anchorUrl: string;
    target?: string;
    linkText?:string;
}

export interface dropboxCombo {
    expansionCards: expansionCard[];
    title?: string;
}

export interface progressCard {
    score: number;
    title?: string;
    progressImage: image;
    skillImage?: image;
}

export interface homeLook{
    name: string;
    logoImage?: image;
    headerIcons?: headerIcon[];
}

export interface headerIcon {
    link: hrefLink;
    iconImage: image;
    innerIconImage: image;
}

export interface objective {
    title?: string;
    objectiveText: string;
}

export interface timeline {
    timelineImage: image;
    instituteImage: image;
    dateImage: image;
    timeLineElements?: timelineElement[];
}

export interface timelineElement {
    date: string;
    content?: homeLook;
    id:string;
    designation: string;
    duration?: string;
    institute?: string;
    skills?: string[];
}