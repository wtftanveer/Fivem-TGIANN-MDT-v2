local coreLoaded = false
local nuiFocus = false
local active = false
local tab = 0
local PlayerData = {}
ESX = nil
Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(100)
	end
    coreLoaded = true
	while ESX.GetPlayerData().job == nil do Citizen.Wait(100) end
    firstLogin()
end)


RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function()
    firstLogin()
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
    PlayerData.job = job
    firstLogin()
end)

function firstLogin()
    PlayerData = ESX.GetPlayerData()
    ESX.TriggerServerCallback("tgiann-mdtv2:ilk-data", function(result, items, playerName)
        local firstData = {}
        firstData.name = playerName
        firstData.rank = PlayerData.job.label
        firstData.items = {}
        for item, data in pairs(items) do
            table.insert(firstData.items, data.label)
        end
        firstData.players = result
        SendNUIMessage({type = 'ilk-bilgi', data = firstData})
    end)
end

RegisterNUICallback('sorgula', function(data, cb)
    local sorguData = nil
    ESX.TriggerServerCallback("tgiann-mdtv2:sorgula", function(result)
        sorguData = result
    end, data)
    while sorguData == nil do Citizen.Wait(0) end
    cb(sorguData)
end)

RegisterNUICallback('photo', function(data, cb)
    local cbComplated = false
    ESX.TriggerServerCallback("tgiann-mdtv2:photo", function(result)
        sorguData = result
        cbComplated = true
    end, data)
    while not cbComplated do Citizen.Wait(0) end
    cb(sorguData)
end)

RegisterNUICallback('cezakaydetclient', function(data)
    TriggerServerEvent("tgiann-mdtv2:ceza-kaydet", data.data)
end)

local olaylarDataLast = nil
local olaylarDataTime = 0
RegisterNUICallback('olaylardata', function(data, cb)
    if GetGameTimer() > olaylarDataTime or olaylarDataTime == 0 then
        olaylarDataTime = GetGameTimer() + 30000
        ESX.TriggerServerCallback("tgiann-mdtv2:olaylardata", function(result)
            olaylarDataLast = result
            cb(result)
        end)
    else
        cb(olaylarDataLast)
    end
end)

local sabikaDataLast = nil
local sabikaDataTime = 0
RegisterNUICallback('sabikadata', function(data, cb)
    if GetGameTimer() > sabikaDataTime or sabikaDataTime == 0 then
        sabikaDataTime = GetGameTimer() + 30000
        ESX.TriggerServerCallback("tgiann-mdtv2:sabikadata", function(result)
            sabikaDataLast = result
            cb(result)
        end, data.id)
    else
        cb(sabikaDataLast)
    end
end)

RegisterNUICallback('sabikasil', function(data, cb)
    TriggerServerEvent("tgiann-mdtv2:sabikasil", data.id)
end)

RegisterNUICallback('resim', function(data, cb)
    if data.url then
        TriggerServerEvent("tgiann-mdtv2:setavatar", data.url, data.id)
    else
        CreateMobilePhone(1)
        CellCamActivate(true, true)
        takePhoto = true
        if nuiFocus then openClose() end
        while takePhoto do
            Citizen.Wait(0)
            if IsControlJustPressed(1, 177) then -- CANCEL
                DestroyMobilePhone()
                CellCamActivate(false, false)
                takePhoto = false
            elseif IsControlJustPressed(1, 176) then -- TAKE.. PIC
                local url = exports['tgiann-base']:screenShot()
                if url then
                    SendNUIMessage({type = 'user-avatar', url = url})
                    TriggerServerEvent("tgiann-mdtv2:setavatar", url, data.id)
                else
                    ESX.ShowNotification("Resim Çekilemedi!")
                end
                openClose()
                DestroyMobilePhone()
                CellCamActivate(false, false)
                takePhoto = false
            end
            HideHudComponentThisFrame(7)
            HideHudComponentThisFrame(8)
            HideHudComponentThisFrame(9)
            HideHudComponentThisFrame(6)
            HideHudComponentThisFrame(19)
            HideHudAndRadarThisFrame()
        end
    end
end)

function openClose()
    nuiFocus = not nuiFocus
    SetNuiFocus(nuiFocus, nuiFocus)
    if nuiFocus then
        startAnim()
        SendNUIMessage({type = 'open'})
    else
        stopAnim()
        SendNUIMessage({type = 'close'})
    end
end

function stopAnim()
	StopAnimTask(PlayerPedId(), "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", "idle_a" ,8.0, -8.0, -1, 50, 0, false, false, false)
	DeleteObject(tab)
end

function startAnim()
    RequestAnimDict("amb@code_human_in_bus_passenger_idles@female@tablet@idle_a")
    while not HasAnimDictLoaded("amb@code_human_in_bus_passenger_idles@female@tablet@idle_a") do
        Citizen.Wait(0)
    end
    TaskPlayAnim(PlayerPedId(), "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", "idle_a" ,8.0, -8.0, -1, 50, 0, false, false, false)
    tab = CreateObject(GetHashKey("prop_cs_tablet"), 0, 0, 0, true, true, true)
	AttachEntityToEntity(tab, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), 28422), -0.05, 0.0, 0.0, 0.0, 0.0, 0.0, true, true, false, true, 1, true)
end

RegisterNUICallback('aranma', function(data, cb)
    TriggerServerEvent("tgiann-mdtv2:aranma", data, true)
end)

RegisterNUICallback('aranmakaldir', function(data, cb)
    TriggerServerEvent("tgiann-mdtv2:aranma", data, false)
end)

RegisterNUICallback('arananlar', function(data, cb)
    ESX.TriggerServerCallback("tgiann-mdtv2:arananlar", function(result)
        cb(result)
    end)
end)

RegisterNUICallback('ev', function(data, cb)
    ESX.TriggerServerCallback("tgiann-mdtv2:ev", function(result)
        cb(result)
    end,data.id)
end)

RegisterNUICallback('olaysil', function(data, cb)
    TriggerServerEvent("tgiann-mdtv2:olaysil", data.id)
end)

RegisterNetEvent('tgiann-denizalti:emp')
AddEventHandler('tgiann-denizalti:emp', function(_active)
	active = _active
	if active then
        if nuiFocus then
            openClose()
        end
  	end
end)

RegisterNetEvent("tgiann-mdtv2:open")
AddEventHandler("tgiann-mdtv2:open", function()
    if PlayerData.job == nil then firstLogin() end
	if PlayerData.job and PlayerData.job.name == "police"  then
		if not active then
			openClose()
		else
			ESX.ShowNotification("Şuan Tableti Kullanamazsın!")
		end
	end
end)

RegisterNUICallback('kapat', function(data, cb)
    if nuiFocus then openClose() end
end)

AddEventHandler('onResourceStop', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then
        if nuiFocus then openClose() end
    end
end)

RegisterNUICallback('olayara', function(data, cb)
    ESX.TriggerServerCallback("tgiann-mdtv2:olayara", function(result)
        cb(result)
    end, data.id)
end)

Citizen.CreateThread(function()
    TriggerEvent('chat:addSuggestion', '/tabletzoom', 'Tabletin Boyutunu Ayarlar.', {{ name="Tablet Boyutu", help="50 İle 100 Arası Bir Değer"}})
end)

RegisterCommand("tabletzoom", function(source, args)
    if PlayerData.job and PlayerData.job.name == "police"  then
        if args[1] == nil then
            ESX.ShowNotification("Bir Değer Girmedin! (50-100)")
        end

        if tonumber(args[1]) < 50 then
            ESX.ShowNotification("50'den Küçük Bir Değer Giremezsin")
        elseif tonumber(args[1]) > 100 then
            ESX.ShowNotification("100'den Büyük Bir Değer Giremezsin")
        else
            ESX.ShowNotification("Tablet Boyutu Ayarlandı", "success")
            SendNUIMessage({type = 'zoom', val = args[1]})
        end
    else
        ESX.ShowNotification("Bu Komutu Kullanamazsın!")
    end
end)