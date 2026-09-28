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
* __Run:__ Mon Sep 28 2026 03:16:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47930.4    | 20.38        | 8.55          |
| connect                  | 3.7.0    | ✗      | 47264.0    | 20.64        | 8.43          |
| polka                    | 0.5.2    | ✓      | 46660.8    | 20.93        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46452.0    | 21.03        | 8.28          |
| kita                     | 1.1.36   | ✓      | 46084.8    | 21.21        | 8.26          |
| server-base-router       | 7.1.32   | ✓      | 46048.8    | 21.22        | 8.21          |
| fastify                  | 4.29.1   | ✓      | 46019.2    | 21.23        | 8.25          |
| polkadot                 | 1.0.0    | ✗      | 45874.4    | 21.31        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45720.0    | 21.37        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 44248.0    | 22.10        | 7.89          |
| connect-router           | 1.3.8    | ✓      | 42676.8    | 22.92        | 7.61          |
| h3                       | 1.15.11  | ✗      | 41774.4    | 23.44        | 7.45          |
| h3-router                | 1.15.11  | ✓      | 41075.2    | 23.85        | 7.33          |
| hono                     | 4.13.9   | ✓      | 38716.8    | 25.33        | 6.35          |
| restana                  | 4.9.9    | ✓      | 38533.6    | 25.45        | 6.87          |
| koa                      | 2.16.4   | ✗      | 36097.8    | 27.23        | 6.44          |
| restify                  | 11.1.0   | ✓      | 35512.2    | 27.65        | 6.40          |
| take-five                | 2.0.0    | ✓      | 35424.2    | 27.74        | 12.74         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34189.4    | 28.76        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 33042.4    | 29.75        | 5.89          |
| hapi                     | 21.4.10  | ✓      | 32682.0    | 30.08        | 5.83          |
| fastify-big-json         | 4.29.1   | ✓      | 11703.6    | 84.87        | 134.65        |
| express                  | 4.22.3   | ✓      | 11116.8    | 89.35        | 1.98          |
| express-with-middlewares | 4.22.3   | ✓      | 10078.0    | 98.59        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
