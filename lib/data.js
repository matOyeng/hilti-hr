import {connectToDB} from '@/lib/utils'
import {JobBoard} from '@/lib/models'

export const fetchJobBoard= async () => {
    try{
        connectToDB()
        const jobs = await JobBoard.find();
        return jobs
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}