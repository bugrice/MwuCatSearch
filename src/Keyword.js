export default function Keyword({ $target, initialState, onKeywordInput }){
    const $keyword = document.createElement('input')
    $keyword.className = 'keyword'

    $target.appendChild($keyword)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        $keyword.vlaue = this.state.value
        
    }

    $keyword.addEventListener('keyup', e => {
        onKeywordInput(e.target.value)
        
    })
}