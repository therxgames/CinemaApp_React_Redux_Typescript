import { FC } from 'react';
import LoginForm from './components/Form';

const Auth: FC = () => {    

    return(
        <div className="main">
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Auth;
