const navigateToDashboard = (navigate, cookies) => {
    if (cookies.AuthToken) {
        navigate('/dashboard/matches', {replace: true})
    }
}

const navigateToHomePage = (navigate, cookies) => {
    if (!localStorage.getItem('user')) {
        navigate('/', {replace: true})
    }
    if (cookies.AuthToken) {
        navigate('/dashboard/matches', {replace: true})
    }
}

const navigateToLoginPage = (navigate, cookies) => {
    if (!cookies.AuthToken) {
        navigate('/login', {replace: true})
    }
}

export {navigateToHomePage, navigateToDashboard, navigateToLoginPage};
