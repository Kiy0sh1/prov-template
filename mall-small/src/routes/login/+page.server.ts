import { fail, redirect, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { register } from 'module';
import { error } from 'console';
import { prisma } from '$lib';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login:async({request, cookies}) => {
        const data = await request.formData();
        let usernameinput = data.get("username")?.toString();
        let passwordinput = data.get("password")?.toString();
        

        if(usernameinput && passwordinput){
            const finduserguy = await prisma.user.findUnique({
                where:{name:usernameinput},
            });
            
            if(passwordinput ===finduserguy?.password){
                cookies.set("loggedin", usernameinput ,{path:"/"});
                throw redirect(302, '/');
            }

        }
    }
} satisfies Actions;