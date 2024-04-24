import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const loggedincheck = cookies.get("loggedin")

    if(!loggedincheck){
        throw redirect(303, "/login");
    }
    return {};
}) satisfies PageServerLoad;