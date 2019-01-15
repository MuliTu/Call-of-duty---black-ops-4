import {generatePath} from "react-router";

export async function asyncgetUserByToken(){
    const [username, platform] = [...localStorage.getItem('token').split(',')];
    await this.updateUser(username, platform);
    this.setState({
        isToken: true,
        redirect: generatePath('user/:id/platform/:platform/multiplayer', {
            id: this.state.query,
            platform: this.state.platform
        })
    });
}