class Fetcher {

    GetJSON = async (url) => {
        this.getUrl = url

        this._getData = await fetch(this.getUrl)
        this._getJson = await this._getData.json()
        return this._getJson
    }
    
    PostJSON = async (url, obj) => {
        this.postUrl = url
        this.postObj = obj
        
        this._postData = await fetch(this.postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.postObj)
        })
    
        this._content = await this._postData.json()
        return this._content
    }

    QueryParam(param) {
        this._param = param

        this.urlParams = new URLSearchParams(window.location.search)
        this.myParam = this.urlParams.get(this._param)

        if(!this.urlParams || !this.myParam) return undefined

        return this.myParam
    }

}