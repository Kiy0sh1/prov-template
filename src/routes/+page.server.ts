import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib';

export const load = (async ({}) => {
    
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    forgor:async({request, cookies}) => {
        const data = await request.formData();
        const loggedincheck = cookies.get("loggedin")

        if(loggedincheck){
            throw redirect(303, "/login");
        }      
        
        
    },

    
} satisfies Actions;