import { CustomerActionCreators } from "../action-creators";
import { CustomerMap } from "../utilities";

const DEFAULT_CUSTOMER_SERVICE_URL = "https://localhost:44300/api/customers";

const CustomerService = {
    getCustomers: () => {
        return (dispatch: any) => {
            const requestUrl = process.env.REACT_APP_CUSTOMER_SERVICE_URL || DEFAULT_CUSTOMER_SERVICE_URL;

            dispatch(CustomerActionCreators.createIsLoading(true));

            fetch(requestUrl)
                .then(response => {
                    if (!response.ok) {
                        dispatch(CustomerActionCreators.createErrorOccurred({
                            errorText: response.statusText
                        }));

                        return;
                    }

                    return response;
                })
                .then(response => response?.json())
                .then((customers: any[]) => {
                    const mappedCustomers = customers.map(
                        customer => CustomerMap.transform(customer));

                    dispatch(CustomerActionCreators.createFillCustomers(mappedCustomers));
                })
                .catch(error => dispatch(CustomerActionCreators.createErrorOccurred({
                    errorText: error
                })))
                .finally(() => dispatch(CustomerActionCreators.createIsLoading(false)));
        };
    }
};

export default CustomerService;
