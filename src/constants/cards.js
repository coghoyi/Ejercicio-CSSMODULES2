import { v4 } from "uuid";

export const CARDS = [
    {
        id: v4(),
        text1:'Supervisor',
		text2:'Monitors activity to identify project roadblocks',
		src:'/public/images/icon-supervisor.svg',
		alt:'imagen1',
        color:'blue'
    },
    {
        id: v4(),
        text1:'Team Builder',
		text2:'Scans our talent network to create the optimal team for your project',
		src:'/public/images/icon-team-builder.svg',
		alt:'imagen1',
        color:'red'
    },
    {
        id: v4(),
        text1:'Karma',
		text2:'Regularly evaluates our talent to ensure quality',
		src:'/public/images/icon-karma.svg',
		alt:'imagen1',
        color:'blue'
    },
    {
        id: v4(),
        text1:'Calculator',
		text2:'Uses data from past projects to provide better delivery estimates',
		src:'/public/images/icon-calculator.svg',
		alt:'imagen1',
        color:'blue'
    },
]