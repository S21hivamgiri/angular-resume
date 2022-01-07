export interface Accordion {
    accordionId: string;
    listCards: Listcard[];
}

export interface SkillChip {
    id: string;
    title: string;
    cardImage: Image;
    skillList: string[];
}

export interface Listcard {
    collapseId: string;
    headerId: string;
    header: string;
    content: string;
    progressCard?: ProgressCard;
}

export interface ExpansionCard {
    launchImage?: Image;
    collapseId: string;
    link?: HrefLink;
    expansionButton: Button;
    cardText?: string;
    cardImage?: Image;
    accordion?: Accordion;
}

export interface Image {
    imageUrl: string;
    altText?: string;
    height?: string;
}

export interface Button {
    buttoneUrl?: string;
    buttonImage?: Image;
    buttonText?: string;
}

export interface HrefLink {
    anchorUrl: string;
    target?: string;
    linkText?: string;
}

export interface DropboxCombo {
    expansionCards: ExpansionCard[];
}

export interface ProgressCard {
    score: number;
    title?: string;
    progressImage: Image;
    skillImage?: Image;
}

export interface HomeLook {
    name: string;
    logoImage?: Image;
    headerIcons?: HeaderIcon[];
}

export interface HeaderIcon {
    link: HrefLink;
    iconImage: Image;
    innerIconImage: Image;
}

export interface Objective {
    title?: string;
    objectiveText: string;
}

export interface Achievement {
    title: string;
    button?: Button[];
}

export interface Timeline {
    timelineImage: Image;
    instituteImage: Image;
    dateImage: Image;
    timeLineElements?: TimelineElement[];
}

export interface TimelineElement {
    date: string;
    content?: HomeLook;
    id: string;
    designation: string;
    duration?: string;
    institute?: string;
    skills?: string[];
}