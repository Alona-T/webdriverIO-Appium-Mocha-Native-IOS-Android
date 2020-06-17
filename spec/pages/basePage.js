class basePage {

    findElement(elem) {
        if (process.env.PLATFORM == 'ANDROID') {
            return $(elem.ANDROID)
        } else {
            return $(elem.IOS)
        }
    }

    findElements(elem) {
        if (process.env.PLATFORM == 'ANDROID') {
            return $$(elem.ANDROID)
        } else {
            return $$(elem.IOS)
        }
    }
}

module.exports = new basePage();