const URL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/';

export async function UserData(name,platform) {
    console.log(`${URL}${platform}/gamer/${name}/profile`);
    const result = await fetch(`${URL}${platform}/gamer/${name}/profile`);
    return await result.json();
}