
import {BaererKey} from '../misc/BaererKey'

export const FetchTweetData = async (val) => {
    try {
            let response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${val}&count=20`, {headers: {'Authorization': `bearer ${BaererKey}`}})
            response = await response.json()
            return response
    } catch (error) {
        return error
    }
}