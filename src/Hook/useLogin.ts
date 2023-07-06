let isLoggedIn = false;

type SetLoginProps = {
    email: string;
    password: string;
};

const useLogin = () => {
    // const [isLoggedIn, setLoggedIn] = useState(false);

    const setLoggedIn = (values: SetLoginProps) => {
        isLoggedIn = true;
    };
    const setLoggedOut = () => {
        isLoggedIn = false;
    };

    return {isLoggedIn, setLoggedIn, setLoggedOut};
};

export default useLogin;
