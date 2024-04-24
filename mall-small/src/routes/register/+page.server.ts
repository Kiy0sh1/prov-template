import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
   
    register:async({request}) => {
        const data = await request.formData();
        let usernameunput = data.get("username")?.toString();
        let passwordinput = data.get("password")?.toString();
        let repasswordinput = data.get("repassword")?.toString();
        
        if(usernameunput && passwordinput){
            if(passwordinput === repasswordinput){
                
                const newUser = await prisma.user.create
                (   
                    {   
                        data:{name:usernameunput, password:passwordinput}
                    }
                );
                if(newUser){
                    throw redirect(302, '/home');
                }
                    
            }
            
            
           
        }
    },    
} satisfies Actions;