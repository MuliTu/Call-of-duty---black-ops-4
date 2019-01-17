const URL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/';

export async function UserData(name, platform) {
    const result = await fetch(`${URL}${platform}/gamer/${name}/profile`);
    return await result.json();
}

export async function UserDataBar(name, platform) {
    const result = await fetch(`${URL}${platform}/gamer/${name}/profile`);
    const {data} = await result.json();

    const userResult = await ({
        username: data.username,
        platform: data.platform,
        level: data.mp.level,
        prestige: data.mp.prestige
    });
    return await userResult


}
