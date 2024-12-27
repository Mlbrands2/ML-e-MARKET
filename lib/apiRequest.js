// import {  useRouter } from "next/navigation";
import toast from "react-hot-toast"

export async function makePostRequest(
    setLoading,
    endpoint,
    data,
    resourceName,
    reset,
    redirect
    ) {
       
       
        
        try{
            setLoading(true);
            const baseUrl=process.env.NEXT_PUBLIC_BASE_URL;
            
            const response = await fetch(`${baseUrl}/${endpoint}`,{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log(response);
                setLoading(false);
                toast.success(`New ${resourceName} Updated successfully`);
                reset();
                redirect(redirectEndpoint)
                redirect();
            } else {
               setLoading(false);
               if (response.status===409){
                toast.error("the given warehouse not Enough");
               } else {
                toast.error("something went wrong")
               }
               toast.error("something went wrong");
            }


        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    
}



export async function makePutRequest(
    setLoading,
    endpoint,
    data,
    resourceName,
    reset,
    redirect
    ) {
       
       
        
        try{
            setLoading(true);
            const baseUrl=process.env.NEXT_PUBLIC_BASE_URL;
            
            const response = await fetch(`${baseUrl}/${endpoint}`,{
                method:"PUT",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log(response);
                setLoading(false);
                toast.success(`New ${resourceName} Updated successfully`);
                reset();
                redirect(redirectEndpoint)
                redirect();
            } else {
               setLoading(false);
               if (response.status===409){
                toast.error("the given warehouse not Enough");
               } else {
                toast.error("something went wrong")
               }
               toast.error("something went wrong");
            }


        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    
}