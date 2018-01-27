{
	/*
	 * Malboxes Example Configuration File
	 *
	 * Uncomment a specific section of the file to trigger a particular feature.
	 *
	 * Paths should be written using forward slashes even on Windows.
	 * For ex: C:/Tools
	 */

	// This allows you to use a local filestore for ISOs.
	// For all versions of Windows except Windows 10 you will need this.
	// "iso_path": "/path/to/your/windows/isos/",

	// Trial or registered version?
	// If using a registered product update the product_key and set trial to 'false'.
	// See https://github.com/GoSecure/malboxes/blob/master/docs/windows-licenses.adoc for more information.
	// "trial": "true",
	"trial": "true",
	"product_key": "4DBD2-TCK8J-2FBJG-89YFB-MH3HQ",

	// VM settings
	"username": "vagrant",
	"password": "vagrant",
	"computername": "ctf",
	// disk size is in megabytes
	"disk_size": "50480",
	// This example profile will attempt to load profiles/maldoc.js
	// For more information on profiles check an example profile:
	// https://github.com/GoSecure/malboxes/blob/master/malboxes/profile-example.js
	"profile": "ctfhacker",
	//"input_locale": "fr-FR",

	// Provision settings
	// Which Hypervisor for privisoning and deployment? (Options are: "virtualbox" and "vsphere") Default is "virtualbox"
	"hypervisor": "virtualbox",
	//If vsphere, the following configuration options are mandatory
	"remote_host": "",
	"remote_datastore": "",
	"remote_username": "",
	"remote_password": "",
	"vsphere_host": "",
	"vsphere_clone_from_vm": "packer-test",
	"vsphere_name": "malboxestest",
	"vsphere_user": "",
	"vsphere_password": "",
	"vsphere_insecure": "true",

	//"proxy": "company_proxy:3128",

	// Windows Defender: true means enabled, false means disabled. Default is false.
	//"windows_defender": "false",
	// Windows Updates: true means enabled, false means disabled. Default is false.
	"windows_updates": "true",

	// Chocolatey packages to install on the VM
	// TODO re-add dependencywalker and regshot once upstream choco package provides a checksum
	"choco_packages": "sysinternals 7zip putty fiddler4 processhacker apm wireshark",

	// Setting the IDA Path will copy the IDA remote debugging tools into the guest
	//"ida_path": "/path/to/your/ida",

	// Setting Tools Path will copy all the files under the given path into the guest.
	// Useful to copy proprietary or unpackaged tools.
	// Note: packer's file provisonning is really slow, avoid having more than
	// 100 megabytes in there.
	//"tools_path": "/path/to/your/tools",

	"_comment": "last line must finish without a comma for file to be valid json"
}