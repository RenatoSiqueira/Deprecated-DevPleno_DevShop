//https://gist.github.com/mathewbyrne/1280286

module.exports = str => {
    str = str || ''
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ'
    const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo'
    const p = new RegExp(a.split('').join('|'), 'g')

    return str.toString().trim().toLowerCase()
        .replace(/ου/g, 'ou')
        .replace(/ευ/g, 'eu')
        .replace(/θ/g, 'th')
        .replace(/ψ/g, 'ps')
        .replace(/\//g, '-')
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c)))     // Replace special chars
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')             // Trim - from end of text
}