import { dropboxCombo, Accordion, objective, homeLook, timeline } from './constant';


export const HOBBY_DATA: Accordion = {
    accordionId: 'hobby-accordion',
    listCards: [
        {
            collapseId: 'hobby-1',
            headerId: 'hobby-header-1',
            header: 'Social Sciences',
            content: "Social Science include psychology, geography, history, GK and current affairs and other subjects, wich fascinate alot.",
        }, {
            collapseId: 'hobby-2',
            headerId: 'hobby-header-2',
            header: 'Philatelist',
            content: "Philately is the study of postage stamps and postal history. its a intrest, now faded a little, enhances the cultural and political history of a country and place.",
        }, {
            collapseId: 'hobby-3',
            headerId: 'hobby-header-3',
            header: 'Management',
            content: '" Managing the event and moments, included from checklist and agenda to final execution, being as a web and food coordiantor in various tech fest and other fest."',
        }, {
            collapseId: 'hobby-4',
            headerId: 'hobby-header-4',
            header: 'Cooking',
            content: " Cooking or cookery is the art, science and craft of using perfect blend of variety of ingredient to create a perfect and delicious stuff for consumption. Mostly intrested in Chinese.",
        }
    ],

};

export const NAME = "SHIVAM KUMAR GIRI";

export const HOME_LOOK: homeLook = {
    name: NAME,
    logoImage: {
        imageUrl: "/assets/Shivam-Logo.png",
        altText: 'SHIVAM KUMAR GIRI',
    },
    headerIcons: [{
        link: {
            anchorUrl: '/assets/Shivam_Kumar_Giri_Resume.pdf',
            target: "_blank",
            linkText: 'Resume'
        },
        iconImage: {
            imageUrl: "/assets/resume-home-icon.png",
            altText: 'SHIVAM KUMAR GIRI',
            height: '40px',
        },
        innerIconImage: {
            imageUrl: "/assets/resume-launch-icon.png",
            altText: 'Open Pdf',
            height: '30px',
        }
    },
    {
        link: {
            anchorUrl: 'mailto:shivamgiri2015@gmail.com',
            target: "_blank",
            linkText: 'Email'
        },
        iconImage: {
            imageUrl: "/assets/email-icon.png",
            altText: 'SHIVAM KUMAR GIRI',
            height: '40px',
        },
        innerIconImage: {
            imageUrl: "/assets/email-launch-icon.png",
            altText: 'Open Email',
            height: '30px',
        }
    },],

}

export const TIME_LINE: timeline = {
    instituteImage: {
        imageUrl: "/assets/unversity.png",
        altText: 'University Logo',
        height: "36px"
    },
    dateImage: {
        imageUrl: "/assets/date.png",
        altText: 'Date Logo',
        height: "36px"
    },
    timelineImage: {
        imageUrl: "/assets/Shivam-button-Logo.png",
        altText: 'Date Logo',
        height: "100%"
    },
    timeLineElements: [
        {
            id: 'job1',
            date: 'Oct 2019',
            content: {
                name: 'Worked on various web technologies as a Vendor for Google including angular.',
            },
            designation: "Front End Developer",
            duration: "Oct 2019 - Present",
            institute: "GlobalLogic India Pvt. Ltd.",
            skills: ['Javascript', 'SASS', 'Angular', 'React', 'RXJS']
        },
        {
            id: 'university',
            date: 'May 2019',
            content: {
                name: '8.39 CGPA',
            },
            designation: "BTech Computer Science",
            duration: "2015-2019",
            institute: "Nit Puducherry, Karaikal",
            skills: ['PHP', 'Data Structures', 'SQL', 'Linux', 'Python']
        },
        {
            id: 'secondary-school',
            date: 'May 2015',
            content: {
                name: '91.4%',
            },
            designation: "Secondary Schools (12<sup>th</sup>), CBSE",
            duration: "2013-2015",
            institute: "Vivekananda Kendra Vidyalaya, Port Blair",
            skills: ['C', 'Data Structures', 'Python']
        },
        {
            id: 'high-school',
            date: 'May 2013',
            content: {
                name: '9.8CGPA',
            },
            designation: "Highschools (10<sup>th</sup>), CBSE",
            duration: "2013-2015",
            institute: "Vivekananda Kendra Vidyalaya, Port Blair",
        },
        {
            id: 'birthday',
            date: 'Nov 1997',
            content: {
                name: '19<sup>th</sup> November 1997',
                logoImage: {
                    imageUrl: 'assets/india.jpg',

                    altText: 'Indian Flag',
                    height: '30px'
                },
            },
            designation: "Birthday",
        }
    ]
}

export const OBJECTIVE: objective = {
    title: 'OBJECTIVE',
    objectiveText: `To make a meaningful impact on the lives of people
      around the globe, through
      the perspective of a JS developer and an creative designer.`
}


export const CONTACT_DATA: dropboxCombo = {
    expansionCards: [
        {
            collapseId: 'emailCollapse',
            launchImage: {
                imageUrl: "/assets/email-open.png",
                altText: 'Launch',
                height: '30px',
            },
            expansionButton: {
                buttonText: 'Email',
                buttonImage: {
                    imageUrl: "/assets/email-logo.png",
                    altText: 'Email',
                    height: '30px',
                },
            },
            cardImage: {
                imageUrl: "/assets/email.jpg",
                altText: 'Email Background',
            },
            link: {
                anchorUrl: 'mailto:shivamgiri2015@gmail.com',
                linkText: 'shivamgiri2015',
                target: '_blank'
            }
        },
        {
            collapseId: 'whatsappCollapse',
            launchImage: {
                imageUrl: "/assets/whatsapp-message-icon.png",
                altText: 'Launch',
                height: '30px',
            },
            expansionButton: {
                buttonText: 'Whatsapp',
                buttonImage: {
                    imageUrl: "/assets/whatsapp-logo.png",
                    altText: 'Whatsapp',
                    height: '30px',
                },
            },
            cardImage: {
                imageUrl: "/assets/whatsapp-bg.jpg",
                altText: 'Whatsapp Background',
            },
            link: {
                anchorUrl: 'https://wa.me/919531809590',
                linkText: '+91 9531809590',
                target: '_blank'
            }
        },
        {
            collapseId: 'githubCollapse',
            launchImage: {
                imageUrl: "/assets/launch.png",
                altText: 'Launch',
                height: '30px',
            },
            expansionButton: {
                buttonText: 'Github',
                buttonImage: {
                    imageUrl: "/assets/github-logo.png",
                    altText: 'Github',
                    height: '30px',
                },
            },
            cardImage: {
                imageUrl: "/assets/github-bg.jpg",
                altText: 'Github Background',
            },
            link: {
                anchorUrl: 'https://github.com/S21hivamgiri',
                linkText: 'S21hivamgiri',
                target: '_blank'
            }
        },
        {
            collapseId: 'Collapse',
            launchImage: {
                imageUrl: "/assets/launch.png",
                altText: 'Launch',
                height: '30px',
            },
            expansionButton: {
                buttonText: 'LinkedIn',
                buttonImage: {
                    imageUrl: "/assets/linkedin-logo.png",
                    altText: 'LinkedIn',
                    height: '30px',
                },  
            },
            cardImage: {
                imageUrl: "/assets/linkedin-bg.jpg",
                altText: 'LinkedIn Background',
            },
            link: {
                anchorUrl: 'https://www.linkedin.com/in/shivam-kumar-giri-3b36b7130/',
                linkText: 'Visit',
                target: '_blank'
            }
        },
    ]
}


export const SKILL_DATA: dropboxCombo = {
    title: 'SKILLS',
    expansionCards: [
        {
            collapseId: 'javaScriptCollapse',
            expansionButton: {
                buttonText: 'Web Stack Developer(core)',
                buttonImage: {
                    imageUrl: "/assets/javascript.svg",
                    altText: 'JS Stack Developer Logo',
                    height: '30px',
                },
            },
            accordion: {
                accordionId: 'js-stack-accordion',
                listCards: [
                    {
                        collapseId: 'js-stack-2',
                        headerId: 'js-stack-header-2',
                        header: 'MERN/MEAN',
                        content: "React is an open-source, front end, JavaScript library for building user interfaces or UI components and Angular is a platform and framework for building single-page client applications using HTML and TypeScript",
                        progressCard: {
                            score: 4.7,
                            title: "MERN/ MEAN",
                            progressImage: {
                                imageUrl: "/assets/node.png",
                                altText: 'Mmean Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'js-stack-3',
                        headerId: 'js-stack-header-3',
                        header: 'SQL/MongoDB',
                        content: "The database management system (DBMS) is the software that interacts with end users, applications, and the database itself to capture and analyze the data.",
                        progressCard: {
                            score: 4.8,
                            title: "SQL/MongoDB",
                            progressImage: {
                                imageUrl: "/assets/database.png",
                                altText: 'SQL Logo',
                                height: '44px',
                            },

                        }
                    },
                    {
                        collapseId: 'js-stack-1',
                        headerId: 'js-stack-header-1',
                        header: 'XAMPP/LAMP',
                        content: "XAMPP is a free and open-source cross-platform web server solution stack package consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP",
                        progressCard: {
                            score: 4.3,
                            title: "XAMPP/LAMP",
                            progressImage: {
                                imageUrl: "/assets/xampp.png",
                                altText: 'Xampp Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'js-stack-4',
                        headerId: 'js-stack-header-4',
                        header: 'UI/UX',
                        content: "The user interface is the graphical layout of an application whereas a UX of the app is determined by how they interact with it.",
                        progressCard: {
                            score: 4.6,
                            title: "UI/UX",
                            progressImage: {
                                imageUrl: "/assets/ui.png",
                                altText: 'UI Logo',
                                height: '44px',
                            },

                        }
                    },
                ],
            },
        },
        {
            collapseId: 'dataScientistCollapse',
            expansionButton: {
                buttonText: 'Data Scientist',
                buttonImage: {
                    imageUrl: "/assets/data-science.png",
                    altText: 'Data Scientist Logo',
                    height: '30px',
                },
            },
            accordion: {
                accordionId: 'data-science-accordion',
                listCards: [
                    {
                        collapseId: 'data-science-1',
                        headerId: 'data-science-header-1',
                        header: 'Neural Networks',
                        content: `Artificial Neural Network is a simple mathematical information processing model of the brain which is used to process nonlinear relationships between inputs and outputs in parallel like a human brain does every second.`,
                        progressCard: {
                            score: 3.5,
                            title: "Neural Networks",

                            progressImage: {
                                imageUrl: "/assets/neural-network.png",
                                altText: 'Neural Networks Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'data-science-2',
                        headerId: 'data-science-header-2',
                        header: 'Supervised Learning',
                        content: "Supervised Learning is the process of an algorithm learning from the training dataset can be thought of as a teacher supervising the learning process. It involve mapping input to output.",
                        progressCard: {
                            score: 4.8,
                            title: "Supervised Learning",

                            progressImage: {
                                imageUrl: "assets/supervised-learning.png",
                                altText: 'Supervised Learning  Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'data-science-3',
                        headerId: 'data-science-header-3',
                        header: 'Tensorflow',
                        content: "Tensorflow is an end-to-end open source machine learning platform",
                        progressCard: {
                            score: 4.3,
                            title: "Tensorflow",

                            progressImage: {
                                imageUrl: "/assets/tensorflow.png",
                                altText: 'Tensorflow Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'data-science-4',
                        headerId: 'data-science-header-4',
                        header: 'Python',
                        content: "Python the best fit for machine learning and AI-based projects include simplicity and consistency, access to great libraries and frameworks for AI and machine learning (ML), flexibility, platform independence, and a wide community.",
                        progressCard: {
                            score: 4.5,
                            title: "Python",

                            progressImage: {
                                imageUrl: "/assets/python.png",
                                altText: 'Python Logo',
                                height: '44px',
                            },

                        }
                    }
                ],
            },
        },
        {
            collapseId: 'graphicDesignCollapse',
            expansionButton: {
                buttonText: 'Graphic Designer',
                buttonImage: {
                    imageUrl: "/assets/graphic-designer.png",
                    altText: 'Graphic Designer Logo',
                    height: '30px',
                },
            },
            accordion: {
                accordionId: 'graphic-design-accordion',
                listCards: [
                    {
                        collapseId: 'graphic-design-1',
                        headerId: 'graphic-design-header-1',
                        header: 'Adobe Illustrator',
                        content: " Adobe Illustrator is the industry-standard vector graphics software that's used by millions of designers and artists to create vectors and svg.",
                        progressCard: {
                            score: 4.7,
                            title: "Adobe Illustrator",

                            progressImage: {
                                imageUrl: "/assets/illustrator.png",
                                altText: 'Adobe Illustrator Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'graphic-design-2',
                        headerId: 'graphic-design-header-2',
                        header: 'Adobe Photoshop',
                        content: "Adobe Photoshop is the world-class imaging and graphic design software that’s used in creative project from photo editing and compositing to digital painting, animation, and graphic design.",
                        progressCard: {
                            score: 4.3,
                            title: "Adobe Photoshop",

                            progressImage: {
                                imageUrl: "/assets/photoshop.png",
                                altText: 'Adobe Photoshop Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'graphic-design-3',
                        headerId: 'graphic-design-header-3',
                        header: 'VideoScribe',
                        content: "VideoScribe is the unique tool for creating engaging animated content to tell the story with white board animation.",
                        progressCard: {
                            score: 4.8,
                            title: "VideoScribe",

                            progressImage: {
                                imageUrl: "/assets/videoscribe.png",
                                altText: 'VideoScribe Logo',
                                height: '44px',
                            },

                        }
                    },
                    {
                        collapseId: 'graphic-design-4',
                        headerId: 'graphic-design-header-4',
                        header: 'Vegas Pro',
                        content: "Vegas Pro (also stylized as VEGAS Pro) is a video editing software package for non-linear editing (NLE). Vegas features real-time multitrack video and audio editing on unlimited tracks, resolution-independent video sequencing, complex effects and compositing tools,",
                        progressCard: {
                            score: 4.0,
                            title: "Vegas Pro",

                            progressImage: {
                                imageUrl: "/assets/vegas.png",
                                altText: 'Vegas Logo',
                                height: '44px',
                            },

                        }
                    },
                ],
            },
        }, {
            collapseId: 'msOfficeCollapse',
            expansionButton: {
                buttonText: 'MicroSoft Office',
                buttonImage: {
                    imageUrl: "/assets/office.png",
                    altText: 'MicroSoft-Office Logo',
                    height: '30px',
                },
            },
            accordion: {
                accordionId: 'ms-office-accordion',
                listCards: [
                    {
                        collapseId: 'ms-office-1',
                        headerId: 'ms-office-header-1',
                        header: 'PowerPoint',
                        content: "Microsoft PowerPoint empowers you to create clean slide presentations and intricate pitch decks.",
                        progressCard: {
                            score: 4.6,
                            title: "POWER POINT",

                            progressImage: {
                                imageUrl: "/assets/power-point.png",
                                altText: 'PowerPoint Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'ms-office-2',
                        headerId: 'ms-office-header-2',
                        header: 'WORD',
                        content: "Use Microsoft Word is used for the word processing and document creation.",
                        progressCard: {
                            score: 4.7,
                            title: "Word",

                            progressImage: {
                                imageUrl: "/assets/word.png",
                                altText: 'JS Stack Developer Logo',
                                height: '44px',
                            },

                        }
                    }, {
                        collapseId: 'ms-office-3',
                        headerId: 'ms-office-header-3',
                        header: 'Visio',
                        content: "Microsoft Visio is a diagramming tool that allows you to create simple as well as complex diagrams according to your business needs.",
                        progressCard: {
                            score: 4.4,
                            title: "VISIO",

                            progressImage: {
                                imageUrl: "/assets/visio.png",
                                altText: 'Visio Logo',
                                height: '44px',
                            },

                        }
                    },
                    {
                        collapseId: 'ms-office-4',
                        headerId: 'ms-office-header-4',
                        header: 'Excel',
                        content: "Microsoft Excel is the industry leading spreadsheet program, a powerful data visualization and analysis tool.",
                        progressCard: {
                            score: 3.2,
                            title: "excel",

                            progressImage: {
                                imageUrl: "/assets/excel.png",
                                altText: 'Excel Logo',
                                height: '44px',
                            },

                        }
                    },
                ],
            },
        },
    ]
};
