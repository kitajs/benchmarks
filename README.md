<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 27 2026 02:38:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48163.2    | 20.26        | 8.59          |
| fastify                  | 4.29.1   | ✓      | 46662.4    | 20.92        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46605.6    | 20.96        | 8.31          |
| kita                     | 1.1.36   | ✓      | 46353.6    | 21.07        | 8.31          |
| connect                  | 3.7.0    | ✗      | 46125.6    | 21.18        | 8.23          |
| polkadot                 | 1.0.0    | ✗      | 45655.2    | 21.40        | 8.14          |
| server-base-router       | 7.1.32   | ✓      | 45506.4    | 21.49        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45025.6    | 21.71        | 8.03          |
| server-base              | 7.1.32   | ✗      | 45007.2    | 21.73        | 8.03          |
| connect-router           | 1.3.8    | ✓      | 43724.0    | 22.36        | 7.80          |
| h3                       | 1.15.11  | ✗      | 42602.4    | 22.98        | 7.60          |
| 0http                    | 3.5.3    | ✓      | 42470.4    | 23.05        | 7.57          |
| h3-router                | 1.15.11  | ✓      | 40874.4    | 23.97        | 7.29          |
| restana                  | 4.9.9    | ✓      | 38386.2    | 25.55        | 6.85          |
| koa                      | 2.16.4   | ✗      | 36397.4    | 26.97        | 6.49          |
| hono                     | 4.12.32  | ✓      | 35428.6    | 27.71        | 5.81          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34737.8    | 28.30        | 6.19          |
| restify                  | 11.1.0   | ✓      | 34494.6    | 28.49        | 6.22          |
| take-five                | 2.0.0    | ✓      | 34274.6    | 28.67        | 12.32         |
| koa-router               | 12.0.1   | ✓      | 32498.8    | 30.26        | 5.80          |
| hapi                     | 21.4.10  | ✓      | 32087.0    | 30.66        | 5.72          |
| fastify-big-json         | 4.29.1   | ✓      | 11464.4    | 86.66        | 131.91        |
| express                  | 4.22.2   | ✓      | 10784.2    | 92.12        | 1.92          |
| express-with-middlewares | 4.22.2   | ✓      | 10279.0    | 96.65        | 3.82          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
