import AuthInfo from '../Components/CustomHook/AuthInfo';

const Blog = () => {
    const {name} = AuthInfo()
    return (
        <div>
            {name}
        </div>
    );
};

export default Blog;