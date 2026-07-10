export type Task = 'coding'|'writing'|'research'|'images'|'video'|'audio'|'agents'|'local';
export type Model = {id:string;name:string;provider:string;kind:string;summary:string;quality:number;speed:number;value:number;privacy:number;reliability:number;context:number;priceIn:number;priceOut:number;open:boolean;modalities:string[];best:string[];weakness:string;freshness:string;sourceCount:number;trend:number;accent:string;sourceUrl:string;verification:string};
export type Priorities={quality:number;speed:number;value:number;privacy:number;context:number;reliability:number};
