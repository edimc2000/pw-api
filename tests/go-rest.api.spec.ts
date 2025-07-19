import { test, expect } from '@playwright/test'

test.describe('GO REST API', () => {

    test('Get list of users', async ({ request }) => {
        const getUsersList = await request.get(``)
        // expect reponse 200
        expect(getUsersList.status()).toEqual(200)

        // debugging
        console.log (getUsersList.status())    
        console.log(await getUsersList.json())
        console.log((await getUsersList.json())[1])
    })
})