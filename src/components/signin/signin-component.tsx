import { Breadcrumb } from "../breadcrumb"

const Signin = () => {
    return (
        <>
            <header id="head" className="secondary"></header>

            <div className="container">
                <Breadcrumb activeLink="User Access" />

                <div className="row">

                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Sign in</h1>
                        </header>

                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h3 className="thin text-center">Sign in to your account</h3>
                                    <p className="text-center text-muted">Lorem ipsum dolor sit amet, <a href="signup.html">Register</a> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>

                                    <hr />

                                    <form>
                                        <div className="top-margin">
                                            <label>Username/Email <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="top-margin">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" />
                                        </div>

                                        <hr />

                                        <div className="row">
                                            <div className="col-lg-8">
                                                <b><a href="/">Forgot password?</a></b>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit">Sign in</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </>
    );
};

export default Signin;