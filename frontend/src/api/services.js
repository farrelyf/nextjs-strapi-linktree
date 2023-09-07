import api from ".";

const ENDPOINT = {
  ACCOUNT: "/accounts",
};

const getAllAccount = async () => {
  try {
    const accounts = await api.get(ENDPOINT.ACCOUNT);
    // console.log(accounts);
    return accounts;
  } catch (error) {
    throw Error(error);
  }
};

const getSelectedAccount = async (slug) => {
  try {
    const selectedAccount = await api.get(`${ENDPOINT.ACCOUNT}?filters[slug][$eqi]=${slug}&populate=*`);
    // console.log(selectedAccount);
    return selectedAccount;
  } catch (error) {
    throw Error(error);
  }
};

export { getAllAccount, getSelectedAccount };
