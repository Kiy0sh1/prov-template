import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    forgor:async({request}) => {
        const data = await request.formData();
        let usernameinput = data.get("username")?.toString();
        
        if(usernameinput){
            console.log("nemo edgar")
            const finduserguy = await prisma.user.findUnique({
                where:{name:usernameinput},
            });
            
            let mypassword = finduserguy?.password;
            console.log(mypassword)
            return fail(404,{mypassword:mypassword})
        }
        
    },

    
} satisfies Actions;