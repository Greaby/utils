SET directory=%~dp0

nircmd setdefaultsounddevice "Casque" 1

start "smg" /D "D:\Documents\greaby\live\SMG" "smg.exe"
start "vlc" /D "C:\Program Files (x86)\VideoLAN\VLC" "vlc.exe" --loop --random "%directory%audio" --directx-volume=0.35
start "obs" /D "C:\Program Files (x86)\obs-studio\bin\64bit" "obs64.exe" --collection "Switch" --scene "Begin"
start "character-animator" /D "C:\Program Files\Adobe\Adobe Character Animator CC (Beta)\Support Files" "Character Animator.exe"
start "restream" /D "C:\Users\jeremy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Restream.io" "Restream Chat.appref-ms"
start "firefox" /D "C:\Program Files\Mozilla Firefox" "firefox.exe" -url "https://tweetdeck.twitter.com/" "https://www.youtube.com/live_dashboard" "https://www.twitch.tv/greaby/dashboard/live"

exit