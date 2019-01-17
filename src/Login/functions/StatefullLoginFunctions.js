
export const saveToken = (query, platform) => {
    const currentUsers = localStorage.getItem('token');
    if (currentUsers === null){
        localStorage.setItem('token', `${query.toLowerCase()},${platform.toLowerCase()}|`);
    }
    else {
        const tempUserList = getTokenAsUsers();
        const isExist = tempUserList.some(x => x.username.toLowerCase() === query.toLowerCase());
        if (!isExist) {
            localStorage.setItem('token', `${query.toLowerCase()},${platform.toLowerCase()}|${currentUsers}`)
        }
    }
};

export const getTokenAsUsers = () => {
    const usersList = localStorage.getItem('token').split('|');
    return usersList.map(user => ({
        username: user.split(',')[0],
        platform: user.split(',')[1]
    })).slice(0, usersList.length - 1);
};