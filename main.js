const root = document.getElementById('root')

fetch('https://api.github.com/users/jt-connors')
  .then(response => response.json())
  .then(data => { 
      // name data
      const name = document.createElement('h1')
      name.innerText = data.name
      root.appendChild(name)
    // Portfolio Box Div
        const portfolioBox = document.createElement('div')
        portfolioBox.classList.add('portfolio-box')
        root.appendChild(portfolioBox)
    // Bio Request
        const bio = document.createElement('p')
        bio.innerText = data.bio
        portfolioBox.appendChild(bio)
    // github profile link
        const profileLink = document.createElement('h3')
        profileLink.innerText = data.html_url 
        portfolioBox.appendChild(profileLink)
    // Company Name
        const companyName = document.createElement('h3')
        companyName.innerText = data.company
        portfolioBox.appendChild(companyName)
    // Profile Picture
        const pic = document.createElement('img')
        pic.src = data.avatar_url
        portfolioBox.appendChild(pic)
    })
