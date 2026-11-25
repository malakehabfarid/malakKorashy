import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';

@Service()
export class NewsService {
    data=httpResource<any>(()=>({
            url:'https://newsapi.org/v2/top-headlines',
            params:{ 
                country:'us',
                q:"",
                apiKey:"5539f97605cb44d8a80e3c998c795b13"
            }
        })
)
}

