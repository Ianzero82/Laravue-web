import swal from "sweetalert";

export function useFlash() {
    function flash(title, message, level = 'success'){
        return swal(title,message, level);
    }

    return {  flash };
}

export function searchProducts(search, skills) {
    let searchTerm = (search || "").toLowerCase();
    return skills.filter(function (skill) {
        let name = (skill.name || "").toLowerCase();
        return (
            name.indexOf(searchTerm) > -1
        );
    });
}