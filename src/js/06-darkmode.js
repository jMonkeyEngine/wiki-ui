var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
var currentTheme = window.localStorage.getItem('theme')

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
} else {
  //set light by default
  document.documentElement.setAttribute('data-theme', 'light')
  toggleSwitch.checked = false
}

function switchTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    window.localStorage.setItem('theme', 'light')
  }
}

toggleSwitch.addEventListener('change', switchTheme, true)
