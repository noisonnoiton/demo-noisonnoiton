(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{669:function(t,e,r){"use strict";r.r(e);var a=r(12),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"ide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[t._v("#")]),t._v(" IDE")]),t._v(" "),r("h4",{attrs:{id:"_1-vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-vs-code"}},[t._v("#")]),t._v(" 1. VS Code")]),t._v(" "),r("ul",[r("li",[t._v("Visual Studio Code 설치"),r("br"),t._v(" "),r("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/download"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"_2-java-개발-환경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-개발-환경"}},[t._v("#")]),t._v(" 2. Java 개발 환경")]),t._v(" "),r("ul",[r("li",[t._v("OpenJDK 11 설치"),r("br"),t._v(" "),r("a",{attrs:{href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jdk.java.net/archive/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("VS Code "),r("strong",[t._v("Java Extension Pack")]),t._v(" 설치"),r("br"),t._v(" "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/java/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/extensions"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("VS Code Java Development Tutorial"),r("br"),t._v(" "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/java-tutorial"),r("OutboundLink")],1)])])])]),t._v(" "),r("h4",{attrs:{id:"_3-spring-boot-개발-환경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-boot-개발-환경"}},[t._v("#")]),t._v(" 3. Spring Boot 개발 환경")]),t._v(" "),r("ul",[r("li",[t._v("VS Code "),r("strong",[t._v("Spring Boot Extension Pack")]),t._v(" 설치하여, 아래 extension 일괄 적용\n"),r("ul",[r("li",[t._v("Spring Boot Tools")]),t._v(" "),r("li",[t._v("Spring Initializr")]),t._v(" "),r("li",[t._v("Spring Boot Dashboard"),r("br"),t._v(" "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/java-spring-boot"),r("OutboundLink")],1)])])])]),t._v(" "),r("h2",{attrs:{id:"container-개발-환경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#container-개발-환경"}},[t._v("#")]),t._v(" Container 개발 환경")]),t._v(" "),r("h4",{attrs:{id:"_1-docker-kubectl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-kubectl"}},[t._v("#")]),t._v(" 1. Docker, kubectl")]),t._v(" "),r("ul",[r("li",[t._v("Dockerhub 계정 생성 (계정 없을 경우)"),r("br"),t._v(" "),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Docker Desktop 설치"),r("br"),t._v(" "),r("a",{attrs:{href:"https://docs.docker.com/desktop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/desktop/"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"_2-kubernetes-object-관리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-kubernetes-object-관리"}},[t._v("#")]),t._v(" 2. Kubernetes Object 관리")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("kustomize 설치"),r("br"),t._v(" "),r("a",{attrs:{href:"https://kubectl.docs.kubernetes.io/installation/kustomize/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kubectl.docs.kubernetes.io/installation/kustomize/"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("kustomize를 이용한 k8s object 선언형 관리"),r("br"),t._v(" "),r("a",{attrs:{href:"https://kubernetes.io/ko/docs/tasks/manage-kubernetes-objects/kustomization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kubernetes.io/ko/docs/tasks/manage-kubernetes-objects/kustomization/"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[t._v("kustomization 파일을 포함하는 디렉터리 내의 리소스 확인")])])])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("kubectl kustomize <kustomization_directory>\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("ul",[r("li",[t._v("리소스를 적용하려면 kubectl apply를 --kustomize 또는 -k 플래그와 함께 실행")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("kubectl apply -k <kustomization_directory>\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h4",{attrs:{id:"_3-aws-및-eks-config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-aws-및-eks-config"}},[t._v("#")]),t._v(" 3. AWS 및 EKS Config")]),t._v(" "),r("ul",[r("li",[t._v("AWS 구성 가이드 참고"),r("br"),t._v(" "),r("a",{attrs:{href:"https://htdp1.github.io/aws/#aws-configure",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://htdp1.github.io/aws/#aws-configure"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);