-> cross origin request
-> browser will block this request due to CORS policy, 
-> you need to enable CORS on your backend server or use a proxy to make this request work 
-> in development environment

-> if your cookies are not set properly you it is not possible to make API call
-> when you login a cookie is sent from server to you


-> if we don't use useEffect here, then we will have infinite loop of fetchUser function because every time we dispatch addUser,
-> the component will re-render and call fetchUser again and again. 
-> So we need to use useEffect to call fetchUser only once when the component mounts.
  useEffect(() => {
    fetchUser();
  }, []);



-> don't forget to set withCredentials to true, otherwise cookies won't be sent in the request and
-> you won't get the feed data
       { withCredentials: true }