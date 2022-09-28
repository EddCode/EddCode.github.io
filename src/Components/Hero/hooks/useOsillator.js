import initOscilattor, {resize, start, stop, mousemove, touchstart} from "../oscilatorAnimation"

const useOscillator = ({ isMobile = false}) => {
    if(!isMobile) {
        initOscilattor()
        return false
    }

    document.body.removeEventListener('orientationchange', resize)
    window.removeEventListener('resize', resize)
    window.removeEventListener('focus', start)
    window.removeEventListener('blur', stop)

    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('touchmove', mousemove)
    document.removeEventListener('touchstart', touchstart)
    
    return false
}

function initOscilattor(){

   

    // ========================================================================================
    // Tendril
    // ----------------------------------------------------------------------------------------

   

    // ----------------------------------------------------------------------------------------



    
}


export default useOscillator